# GTM e Google Ads: diagnóstico e o que corrigir

Diagnóstico de 2026-11-10, feito no site em produção (sem acesso às contas Google).

## O que funciona (lado do site)
- `GTM-PLB96CW5` está instalado, publicado e carrega em produção (`NEXT_PUBLIC_GOOGLE_TAG_ID`).
- O container dispara:
  - Google tag do GA4 `G-3TETZV9D4M`, com o pageview chegando em `g/collect`;
  - Google tag do Ads `AW-18040876418`, que hoje faz só remarketing (`viewthroughconversion`, `rmkt/collect`);
  - evento do GA4 `whatsapp_click`, com os parâmetros `whatsapp_location`, `whatsapp_label` e `whatsapp_url`.
- O clique no WhatsApp envia um novo hit ao GA4. Não há CSP bloqueando nada.

## O que falta no container (causa provável de "tag inativa" no Ads)
- **Não há tag de Conversão do Google Ads** (`Google Ads Conversion Tracking`).
- **Não há Vinculador de conversões** (`Conversion Linker`).

Sem essas tags, uma ação de conversão do Ads configurada como "Site, via tag" nunca recebe hits.

## Como corrigir (em tagmanager.google.com → GTM-PLB96CW5)
1. Em Google Ads → Metas → Conversões, abra a ação de conversão (ex.: "Clique no WhatsApp") e copie o **ID de conversão** (`18040876418`) e o **rótulo**.
   - Se a ação for **importada do GA4**, não crie tag nenhuma. Basta marcar `whatsapp_click` como **evento-chave** no GA4 (Admin → Eventos) e conferir a vinculação GA4 ↔ Ads.
2. Crie a tag **Conversion Linker**, com acionador *All Pages*.
3. Crie a tag **Google Ads Conversion Tracking** com o ID e o rótulo.
   - Acionador: *Evento personalizado* `whatsapp_click`. O evento já existe no dataLayer, enviado por `app/components/analytics/TrackedWhatsAppLink.tsx`.
4. Teste em **Visualizar** (Tag Assistant): clique num CTA de WhatsApp e confira se a tag de conversão disparou.
5. Clique em **Publicar**. No Ads, o status sai de "inativa" em até ~24h após a primeira conversão.

## Cuidados
- Não envie a URL completa do WhatsApp, a mensagem nem dados de saúde como parâmetro. O site já manda `whatsapp_url` sem a query.
- O GTM carrega **sem consentimento prévio** (decisão D1, pendente). Antes de ampliar o rastreamento de anúncios, decida sobre o banner LGPD.
- Um clique no WhatsApp não é um agendamento. Trate-o como conversão secundária ou "micro" no Ads.
