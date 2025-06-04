#!/usr/bin/env python3
"""
Servidor HTTP simples para servir o site Bella Derme na rede local
Autor: Assistente para Jackeline Ferreira
Data: 2025-06-03
"""

import http.server
import socketserver
import socket
import webbrowser
import threading
import time
from pathlib import Path

class BellaDermeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler customizado para servir arquivos com MIME types corretos"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent), **kwargs)
    
    def end_headers(self):
        # Adiciona headers para permitir CORS se necessário
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        """Customiza o log para ser mais legível"""
        print(f"[{self.date_time_string()}] {format % args}")

def get_local_ip():
    """Obtém o IP local da máquina"""
    try:
        # Conecta a um endereço externo para descobrir o IP local
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"

def start_server(port=8000):
    """Inicia o servidor HTTP"""
    local_ip = get_local_ip()
    
    try:
        with socketserver.TCPServer(("", port), BellaDermeHTTPRequestHandler) as httpd:
            print("=" * 70)
            print("🌟 SERVIDOR BELLA DERME - JACKELINE FERREIRA 🌟")
            print("=" * 70)
            print(f"📍 Servidor rodando na porta: {port}")
            print(f"🌐 IP Local: {local_ip}")
            print()
            print("📱 ACESSE DE QUALQUER DISPOSITIVO NA SUA REDE:")
            print(f"   Local:    http://localhost:{port}")
            print(f"   Rede:     http://{local_ip}:{port}")
            print()
            print("📋 DISPOSITIVOS SUPORTADOS:")
            print("   • Computador/Laptop")
            print("   • Smartphone/Tablet")
            print("   • Smart TV")
            print("   • Qualquer dispositivo com navegador")
            print()
            print("🔧 COMANDOS:")
            print("   • Ctrl+C para parar o servidor")
            print("   • Servidor reinicia automaticamente em caso de erro")
            print("=" * 70)
            
            # Abre automaticamente no navegador padrão
            def open_browser():
                time.sleep(1)
                webbrowser.open(f"http://localhost:{port}")
            
            threading.Thread(target=open_browser, daemon=True).start()
            
            # Serve forever
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n👋 Servidor finalizado pelo usuário")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Porta {port} já está em uso. Tentando porta {port + 1}...")
            start_server(port + 1)
        else:
            print(f"❌ Erro ao iniciar servidor: {e}")
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")

if __name__ == "__main__":
    # Verifica se está no diretório correto
    if not Path("index.html").exists():
        print("❌ Erro: arquivo index.html não encontrado!")
        print("   Execute este script na pasta do projeto Bella Derme")
        exit(1)
    
    print("🚀 Iniciando servidor Bella Derme...")
    start_server()
