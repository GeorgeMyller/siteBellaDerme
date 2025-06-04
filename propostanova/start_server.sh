#!/bin/bash
# Script para iniciar o servidor Bella Derme
# Uso: ./start_server.sh [porta]

# Define a porta (padrão: 8000)
PORT=${1:-8000}

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🌟 SERVIDOR BELLA DERME - JACKELINE FERREIRA 🌟${NC}"
echo "=================================================="

# Verifica se o index.html existe
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Erro: arquivo index.html não encontrado!${NC}"
    echo "Execute este script na pasta do projeto Bella Derme"
    exit 1
fi

# Obtém o IP local
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n1)

echo -e "${BLUE}📍 Servidor iniciando na porta: ${PORT}${NC}"
echo -e "${BLUE}🌐 IP Local: ${LOCAL_IP}${NC}"
echo ""
echo -e "${YELLOW}📱 ACESSE DE QUALQUER DISPOSITIVO NA SUA REDE:${NC}"
echo "   Local:    http://localhost:${PORT}"
echo "   Rede:     http://${LOCAL_IP}:${PORT}"
echo ""
echo -e "${YELLOW}🔧 Pressione Ctrl+C para parar o servidor${NC}"
echo "=================================================="

# Inicia o servidor Python
python3 -m http.server $PORT
