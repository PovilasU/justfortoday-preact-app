type HelpProps = {
  path?: string;
};

export default function Help(_props: HelpProps) {
  return (
    // <!-- Main Content-->
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className=" mt-4">
            <h5>Reikia pagalbos?</h5>
            <p>
              Jeigu išgyveni emocinį sunkumą, krizę ar nori pasikalbėti –
              apsilankyk šiose svetainėse, kur rasi patikimos pagalbos numerius:
            </p>
            <ul>
              <li>
                <a href="https://jaunimolinija.lt" target="_blank">
                  Jaunimo linija
                </a>
              </li>
              <li>
                <a href="https://vaikulinija.lt" target="_blank">
                  Vaikų linija
                </a>
              </li>
              <li>
                <a href="https://viltieslinija.lt" target="_blank">
                  Vilties linija
                </a>
              </li>
              <li>
                <a href="https://moteriai.lt" target="_blank">
                  Pagalbos moterims linija
                </a>
              </li>
              <li>
                <a href="https://krizesiveikimas.lt" target="_blank">
                  Krizių įveikimo centras
                </a>
              </li>
              <li>
                <a href="https://www.aalietuvoje.org/" target="_blank">
                  Anoniminiai alkoholikai (AA)
                </a>
              </li>
              <li>
                <a href="https://112.lt" target="_blank">
                  Bendroji pagalba – 112
                </a>
              </li>
            </ul>
            <p>
              <small>
                Ši informacija pateikiama tam, kad būtų lengviau rasti pagalbą.
                Jei jautiesi blogai – nelauk, ieškoti pagalbos yra drąsu.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
