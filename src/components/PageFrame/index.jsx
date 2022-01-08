import { TopMenu, ContainerPage, BottomMenu } from "./style"; 
import ProgressBar from "../ProgressBar";

export default function PageFrame(){
    return(
        <>
            <TopMenu>
                
            </TopMenu>
            <ContainerPage>

            </ContainerPage>
            <BottomMenu>
                <p>Hábitos</p>
                <ProgressBar></ProgressBar>
                <p>Histórico</p>
            </BottomMenu>
        </>
    );
}