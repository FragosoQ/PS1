# 📊 Integração Google Sheets - PS1

## 🎯 Objetivo

Os dados da aplicação agora são carregados dinamicamente do separador **PS1** do Google Sheets:
https://docs.google.com/spreadsheets/d/1GQUB52a2gKR429bjqJrNkbP5rjR7Z_4v85z9M7_Cr8Y/edit?usp=sharing

## 📋 Estrutura da Planilha PS1

A planilha PS1 contém dados de encomendas/produção com as seguintes colunas relevantes:

### Colunas de Destino (Globo 3D):
- **País 1**: Primeiro país associado à encomenda
- **País 2**: Segundo país (opcional)
- **País 3**: Terceiro país (opcional)

### Colunas de Identificação:
- **Chave de Procura**: Identificador único da encomenda/lote
- **LOTE**: Número do lote de produção
- **QUANTIDADE / LOTE**: Quantidade de itens no lote

### Colunas de Datas (Timelines de Produção):
- **DATA PRETENDIDA**: Data de entrega esperada
- **DATA LASER**: Data de processamento laser
- **INÍCIO SERRALHARIA** / **FIM SERRALHARIA**: Período de serralharia
- **INÍCIO SOLDADURA / ACABAMENTO** / **FIM SOLDADURA / ACABAMENTO**: Período de soldadura

### Colunas de Tempos de Processamento:
- **P1 (h), P2 (h), P3 (h), P4 (h), P5 (h)**: Horas de processamento por estação

### Colunas de Status e Responsabilidade:
- **STATUS**: Estado da encomenda (Em Produção, Finalizado, etc.)
- **Operador**: Responsável pela encomenda
- **GERAL(T)**: Tempo geral de produção (base/target)
- **GERAL(R)**: Tempo geral de produção (realizado)

### Como Funciona:

O sistema:
1. Extrai todos os países únicos das colunas "País 1", "País 2", "País 3"
2. Busca automaticamente as coordenadas (latitude/longitude) no banco de dados `countries.all.json`
3. Para cada linha da planilha, cria conexões individuais de Portugal para cada país mencionado
4. Adiciona Portugal automaticamente como ponto de origem
5. Exibe as linhas no globo 3D

### Exemplo de Dados:

| Chave de Procura | País 1  | País 2   | País 3  |
|------------------|---------|----------|---------|
| PROJ-001         | Angola  | Brasil   | -       |
| PROJ-002         | França  | Alemanha | Itália  |
| PROJ-003         | Japão   | -        | -       |

**Resultado:**
- Países no globo: Portugal (origem), Angola, Brasil, França, Alemanha, Itália, Japão
- Conexões criadas:
  - PROJ-001: Portugal → Angola, Portugal → Brasil
  - PROJ-002: Portugal → França, Portugal → Alemanha, Portugal → Itália
  - PROJ-003: Portugal → Japão
- **Total:** 6 linhas separadas de Portugal para os destinos

**Nota:** Cada linha da planilha cria conexões individuais. Se França aparece em 3 linhas diferentes, haverá 3 linhas separadas de Portugal → França no globo.

## 🌍 Banco de Dados de Países

O sistema usa `countries.all.json` com mais de 200 países e suas coordenadas geográficas.

### Mapeamento de Nomes:

O sistema reconhece variações de nomes automaticamente:
- **Portugal** → Portugal
- **Espanha** → Spain  
- **França** → France
- **Alemanha** → Germany
- **EUA / Estados Unidos** → United States
- **Moçambique** → Mozambique
- **Angola** → Angola
- **Brasil** → Brazil
- E muitos outros...

## 🚀 Como Funciona

1. **Carregamento Automático**: Quando a aplicação inicia, os dados são carregados automaticamente do Google Sheets durante o preload

2. **Detecção Automática**: O sistema detecta automaticamente os nomes das colunas (case-insensitive)

3. **Fallback**: Se houver erro ao carregar do Google Sheets, a aplicação usa os dados estáticos de backup

## 🧪 Testar a Integração

Abra o arquivo `test-sheets.html` no navegador para verificar se os dados estão sendo carregados corretamente:

```bash
# Se tiver Python instalado
python3 -m http.server 8000

# Depois abra no navegador
http://localhost:8000/test-sheets.html
```

## 📁 Arquivos Modificados

- **assets/data/googleSheets.js**: Funções para carregar e converter dados do Google Sheets
- **scripts/index.js**: Modificado o preload para carregar dados do Google Sheets
- **index.html**: Adicionado script googleSheets.js
- **test-sheets.html**: Página de teste para verificar o carregamento

## ⚙️ Configuração

Se precisar mudar o ID da planilha ou nome do separador, edite o arquivo `assets/data/googleSheets.js`:

```javascript
const SHEET_ID = '1GQUB52a2gKR429bjqJrNkbP5rjR7Z_4v85z9M7_Cr8Y';
const SHEET_NAME = 'PS1';
```

## 🔒 Permissões do Google Sheets

⚠️ **IMPORTANTE**: A planilha deve estar configurada como:
- **"Qualquer pessoa com o link pode ver"** OU
- **Pública na web**

Caso contrário, o fetch irá falhar por questões de CORS/permissões.

### Como tornar a planilha pública:
1. Abra a planilha no Google Sheets
2. Clique em "Partilhar" (canto superior direito)
3. Em "Obter link", selecione "Qualquer pessoa com o link"
4. Certifique-se de que está em "Visualizador"
5. Copie o link

## 🐛 Resolução de Problemas

### Erro: "Failed to fetch"
- Verifique se a planilha está pública
- Verifique a conexão à internet
- Confirme que o SHEET_ID está correto

### Erro: "Estrutura da planilha inválida"
- Verifique se as colunas **País 1**, **País 2**, **País 3** existem na planilha PS1
- Os nomes das colunas devem ser exatamente "País 1", "País 2", "País 3"

### Dados não aparecem no globo
- Abra o console do navegador (F12) para ver os logs
- Verifique se os dados foram carregados corretamente
- Verifique se os nomes dos países são reconhecidos (ver seção "Mapeamento de Nomes")
- Países não encontrados no banco de dados serão listados no console

## 📝 Logs

O sistema fornece logs detalhados no console:
- 🌐 Carregamento iniciado
- 📋 Cabeçalhos detectados
- ✅ Dados carregados
- 🔄 Conversão de dados
- ❌ Erros (se houver)

Abra o console do navegador (F12) para acompanhar o processo.

## 🎨 Formato de Dados Resultante

Os dados são convertidos para o formato:

```javascript
data.countries = [
  {
    name: "Portugal",
    latitude: "38.7072",
    longitude: "-9.13552"
  },
  {
    name: "Angola",
    latitude: "-8.8383",
    longitude: "13.2344"
  },
  {
    name: "Brazil",
    latitude: "-15.7801",
    longitude: "-47.9292"
  }"Germany", "Italy", "Japan"]
  // Se um país aparece em múltiplas linhas, aparecerá múltiplas vezes no array
  // Exemplo: ["France", "Germany", "France", "Italy"] se França aparece 2x
};
```

## 📝 Notas Importantes

- **Portugal** é sempre a origem de todas as conexões
- **Uma linha por país** mencionado em cada linha da planilha
- **Coordenadas** são buscadas automaticamente do banco de dados
- Se um país aparece em **múltiplas linhas** da planilha, terá múltiplas entradas no array de conexões
## 📝 Notas Importantes

- **Portugal** é sempre adicionado como país de origem
- **Coordenadas** são buscadas automaticamente do banco de dados
- **Conexões** são criadas entre países que aparecem juntos nas linhas da planilha
- Se um país não for encontrado no banco de dados, será ignorado (aparecerá aviso no console)
- Os nomes dos países são **normalizados** para o formato padrão do banco de dados

## ✨ Próximos Passos

Para personalizar o mapeamento de dados, edite a função `convertSheetDataToAppFormat()` em `assets/data/googleSheets.js`.
