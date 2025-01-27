import TribuAztecas from "../components/tribu/tribu-aztecas/TribuAztecas";
import TribuHeader from "../components/tribu/tribu-header/TribuHeader";
import TribuHistoria from "../components/tribu/tribu-historia/TribuHistoria";

function TribuPage(){
    return (
        <>
     <TribuHeader />
     <TribuAztecas />
     <TribuHistoria />
        </>
    )
}

export default TribuPage;