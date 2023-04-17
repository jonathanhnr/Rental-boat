import Img1 from "../../images/download/appstore.svg";
import Img2 from "../../images/download/googleapp.svg";

function Download() {
    return (
        <>
            <section className="download-section">
                <div className="container">
                    <div className="download-text">
                        <h2>Baixe nosso aplicativo para aproveitar ao máximo</h2>
                        <p>
                            Fique por dentro de todas as promoções disponiveis
                        </p>
                        <div className="download-text__btns">
                            <img alt="download_img" src={Img2.src} />
                            <img alt="download_img" src={Img1.src} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Download;
;