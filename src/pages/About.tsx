type AboutProps = {
  path?: string;
};

export default function About(_props: AboutProps) {
  return (
    <>
      {/* <header className="masthead">
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>Apie mane</h1>
                <span className="subheading">Štai kuo aš užsiimu</span>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      {/* <!-- Main Content--> */}
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Sukūriau šią svetainę kaip įrankį sau – priminimą, kaip norėčiau
                gyventi kiekvieną dieną. Kartais gyvenimo ritme lengva
                pasiklysti, tad ši vieta padeda man sugrįžti prie to, kas
                svarbiausia.
              </p>
              <p>
                Galbūt tai bus naudinga ir tau – jei ieškai paprastų būdų
                gyventi sąmoningiau, ramiau, tikriau.
              </p>
              <p>
                Čia taip pat dalinsiuosi savo pamąstymais, patirtimis ir kitais
                atradimais, kurie man padeda kasdienybėje. Tikiu, kad mažais
                žingsniais galime keisti savo vidinį pasaulį, o kartu – ir visą
                gyvenimą.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
