import styles from "./MyGrid.module.css";

export function Footer() {
  return (
    <footer className={styles.footer1}>
    
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <p>IFRN CAMPUS MACAU</p>
        <p>CURSO TECNICO EM INFORMATICA</p>
        <p>PROGRAMAÇÃO PARA INTERNET</p>
      </div>
      
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "1.6rem",
          margin: "0 2rem",
          textAlign: "center",
          flex: 1,
        }}
      >
        WESLEY BARROS PEREIRA
      </div>
    
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://github.com/WBP-ui/ppi2025_4inf1v" target="_blank" rel="noopener noreferrer">
          <img
            src="https://th.bing.com/th/id/R.f12560820c5070ee4be83c3feb569ce1?rik=l9Xz9PiZqqnDJQ&pid=ImgRaw&r=0"
            alt="GitHub"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-1024.png"
            alt="LinkedIn"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://th.bing.com/th/id/R.639b3dafb544d6f061fcddd2d6686ddb?rik=0hBi4069Hr3BFw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-vector-png-instagram-icon-white-on-black-circle-1600.png&ehk=wjJ5%2fsac1A7QUs%2bdN%2fRznvmRlG%2bBTja2HiIh0Vboens%3d&risl=&pid=ImgRaw&r=0"
            alt="Instagram"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
        </a>
      </div>
    </footer>
  );
}