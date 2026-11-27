# Perfil da Empresa no Google e presença fora do site: checklist

Para o Dr. Paulo e a secretária. Versão de 2026-11-12.

Quem procura "neurocirurgião em Campo Grande" vê primeiro o mapa com três
perfis do Google, e só depois os sites. O mapa depende do **Perfil da Empresa
no Google** (o antigo Google Meu Negócio), não do site. O site já está pronto
para isso. O que falta são os passos abaixo, feitos nas contas do médico.

A regra que vale para tudo: **nome, endereço e telefone iguais em todo lugar**,
letra por letra. É assim que o Google entende que o perfil, o site, o Doctoralia
e as outras listas falam da mesma pessoa.

## Os dados certos (os mesmos do site)

| Campo | Valor |
| --- | --- |
| Nome | Dr. Paulo Araújo |
| Categoria principal | Neurocirurgião |
| Endereço | R. 15 de Novembro, 2808 - 3º andar - Jardim dos Estados, Campo Grande - MS, 79020-300 |
| Telefone e WhatsApp | (67) 4042-0561 |
| Site | https://www.pauloaraujoneuro.com.br |
| Registro | CRM-MS 16562 • RQE 9823 |

## 1. Perfil da Empresa no Google

Acesse em [business.google.com](https://business.google.com) com a conta do médico.

- [ ] **Nome:** só "Dr. Paulo Araújo". Não acrescente "Neurocirurgião",
      "Campo Grande" nem "Coluna". O Google proíbe palavras-chave no nome, pode
      suspender o perfil, e outros médicos podem denunciar.
- [ ] **Categoria principal:** "Neurocirurgião". Só acrescente outra categoria
      se ela descrever o que o consultório de fato oferece.
- [ ] **Endereço:** exatamente como na tabela, com o "3º andar".
- [ ] **Telefone:** (67) 4042-0561, o mesmo do site.
- [ ] **Site:** a página inicial, `https://www.pauloaraujoneuro.com.br`.
- [ ] **Horário:** o horário real das consultas do Dr. Paulo. O site não
      publica esse horário. O horário do prédio (segunda a sexta, 7h às 19h) não
      é o horário do médico.
- [ ] **Descrição:** a mesma linha do site: neurocirurgião em Campo Grande - MS,
      com foco em cirurgia de nervo periférico, cirurgia de coluna e reabilitação
      neurocirúrgica. Sem promessa de resultado.
- [ ] **Fotos:** foto do médico, da fachada do prédio e da recepção do INCC.
      Sem foto de paciente e sem antes e depois.
- [ ] **Avaliações:** peça a pacientes atendidos que avaliem, de forma
      constante (algumas por mês rendem mais que muitas de uma vez). Não ofereça
      nada em troca. Responda de forma cordial, sem citar diagnóstico, exame ou
      qualquer dado de saúde do paciente.
- [ ] **Atualizações:** uma postagem por mês, por exemplo com o link de um
      artigo novo do blog.
- [ ] Se o INCC tiver um perfil próprio, o do Dr. Paulo continua separado. O
      Google permite o perfil de um profissional no mesmo endereço da clínica.
- [ ] **Envie para o Diego** o link do perfil (em "Compartilhar perfil"). Ele
      entra no site como link oficial do médico.

## 2. Doctoralia

O perfil [doctoralia.com.br/perfil/paulo-araujo-5](https://www.doctoralia.com.br/perfil/paulo-araujo-5)
aparece na busca pelo nome do médico, mas ainda diz **"Neurocirurgião Curitiba"**.

- [ ] Trocar a cidade principal para Campo Grande.
- [ ] Remover o endereço do Hospital Marcelino Champagnat, em Curitiba, que é
      um atendimento anterior.
- [ ] Manter o endereço do INCC igual ao da tabela, com o "3º andar".
- [ ] Colocar o link do site.
- [ ] Avisar o Diego quando estiver corrigido. Só então o site passa a apontar
      para o Doctoralia.

## 3. Outras listas e links

- [ ] CatalogoMed e outras listas de médicos: criar ou corrigir o perfil com
      os mesmos dados.
- [ ] Pedir ao INCC, à Clínica Protrauma e à Santa Casa que listem o
      Dr. Paulo nas páginas de corpo clínico, com o link do site.
- [ ] Link do site na bio do Instagram (@pauloaraujoneuro) e no Currículo
      Lattes.

## 4. Tarefas técnicas (Diego)

- [ ] Vercel → Domínios: o endereço sem `www` redireciona com **307**
      (temporário). Trocar para **308** (permanente).
- [ ] Search Console, depois do deploy dos PRs de SEO: reenviar o
      `sitemap.xml` e pedir indexação de `/`, `/sobre`, `/clinica/protrauma` e
      `/blog/quanto-tempo-nervo-leva-para-regenerar`.
- [ ] Com os links do item 1 e do item 2, abrir o PR que acrescenta os dois
      perfis ao `sameAs` do médico.

## Como medir

No Search Console, compare 28 dias antes e 28 dias depois, por busca:
"paulo araujo", "neurocirurgião campo grande" e "protrauma". No Perfil da
Empresa, acompanhe em "Desempenho" as buscas, as ligações e os pedidos de rota.
