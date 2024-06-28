import React from 'react'
import '../app/globals.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-beije">
          <h1>beije.</h1>
          <h5>Arayı açmayalım!</h5>
          <p>
            "beije'deki yeni ürün ve geliştirmeleri sana haber verelim & aylık
            e- gazetemiz döngü'ye abone ol!"
          </p>
          <div>
            <input
              type="e-mail"
              placeholder="e-mail adresin"
              className="footer-input"
            />
            <button className="footer-button">Gönder</button>
          </div>
          <p>
            "Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
            beije'den haber almayı onaylıyorum."
          </p>
        </div>
        <div className="footer-nav">
          <nav>
            <p>beije Ped</p>
            <p>Blog</p>
            <p>beije Günlük Ped</p>
            <p>Sıkça Sorulan Sorular</p>
            <p>beije Tampon</p>
            <p>Biz Kimiz?</p>
            <p>beije Store</p>
            <p>Quiz</p>
          </nav>
        </div>
        <nav>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Spotify</p>
        </nav>

        <div className="footer-son">
          <p>&copy; 2024 Beije.Tüm hakları saklıdır.</p>
          <p>KVKK</p>
          <p>KVKK Başvuru Formu</p>
          <p>Üyelik Sözleşmesi</p>
          <p>Gizlilik Politikası</p>
          <p>Çerezlik Politikası</p>
          <p>Test Sonuçları </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
