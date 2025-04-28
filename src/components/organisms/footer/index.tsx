import './styles.css';

export default function Footer() {
    return (
        <footer className="bg-primary-action p-4 mb-[70px] flex flex-col gap-y-5">
            {/* linha 1 - links uteis */}
            <div className='flex justify-between items-start'>
                {/* coluna 1 */}
                <div className="flex flex-col items-start">
                    <h5>Sobre nós</h5>
                    <div className='footer-links-wrapper'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Quem somos
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Contato
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Termos de uso
                        </a>
                    </div>
                </div>
                {/* coluna 2 */}
                <div className="flex flex-col items-start">
                    <h5>Ajuda</h5>
                    <div className='footer-links-wrapper'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            FAQ
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Suporte
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Como funciona
                        </a>
                    </div>
                </div>
                {/* coluna 3 */}
                <div className="flex flex-col items-start">
                    <h5>Redes sociais</h5>
                    <div className='footer-links-wrapper'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            whatsapp
                        </a>
                    </div>
                </div>
            </div>

            {/* linha 2 */}
            <hr className='rounded-3xl bg-white/60 h-px outline-0 border-0'/>

           {/* linha 3 */}
           <p className=''>
                @ 2025 Marketplace - Todos os direitos reservados
           </p>
        </footer>
    );
};