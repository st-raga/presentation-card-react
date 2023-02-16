export default function Info() {

    let photo = <img id="photo-author" src="sr-photo.jpg" width="317px" alt="Author's Photo"/>


    return (
        <div id="info">
            {photo}
            <h1>Sthefany Raga</h1>
            <h2>QA Engineer / Developer Junior</h2>
            <div id="info-buttons">
                <div id="info-mail" className="info--buttons">
                    <img src="mail.png" />
                    <a className="info--mail" href="mailto:sthefanyraga@gmail.com?subject=Hello Sthefany" target="_blank">Mail</a>
                </div>
                <div id="info-linkedin" className="info--buttons">
                    <img src="linkedin.png" />
                    <a href="https://www.linkedin.com/in/sthefany-raga-b23b96243/" target="_blank">Linkedin</a>
                </div>
            </div>
        </div >
    )
}