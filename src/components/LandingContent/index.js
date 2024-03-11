import '../../App.css';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Wrap from '../Wrap';
import Header from '../Header';
import SectionTitle from '../SectionTitle';
import AccordionComp from '../AccordionComp';
import BackTop from '../BackTop';
import Footer from '../Footer';
import DownloadApp from '../DownloadApp';
import CircleBg from '../Phones/CircleBg';
import Club from '../Phones/Club';
import DoisCel from '../Phones/DoisCel';
import Search from '../Phones/Search';

export default function landingContent() {
  const backTop = () => {
    console.log('topo');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Header />
      <Wrap>
        <Title area="T1" texto="Ler junto é bem melhor!" tipo="h1" />
        <Subtitle
          texto="Sabe aqueles livros que você comprou e deixou de lado?"
          area="S1"
          rowS={2}
          rowE={3}
        />
        <Subtitle
          texto="Convide alguém para ler com você."
          area="S1"
          rowS={3}
          rowE={4}
        />
        <DownloadApp area="B1" />
        <DoisCel area="I1" colS={2} colE={9} rowS={4} rowE={5} />
        <Title
          texto="Um clube para chamar de seu"
          tipo="h2"
          area="T2"
          colS={2}
          colE={6}
          rowS={9}
          rowE={10}
        />
        <Subtitle
          area="S3"
          texto="Encontre um clube para fazer parte ou crie o seu em poucos minutos."
          colS={2}
          colE={5}
          rowS={10}
          rowE={14}
          margin={'20px 0'}
        />
        <CircleBg area="I2" colS={5} colE={11} rowS={9} rowE={13} />
        <Title
          area="T3"
          texto="Gerencie seu clube sem complicações"
          tipo="h2"
          colS={2}
          colE={8}
          rowS={13}
          rowE={15}
        />
        <Club area="I3" colS={2} colE={15} rowS={15} rowE={16} />

        <Title
          area="T4"
          texto="Explore o mundo literário com a gente"
          tipo="h2"
          colS={2}
          colE={8}
          rowS={16}
          rowE={17}
        />
        <Subtitle
          area="S4"
          texto="Descubra novos livros, crie ou retome o hábito de leitura."
          colS={2}
          colE={7}
          rowS={17}
          rowE={18}
        />
        <Search area="I4" colS={2} colE={9} rowS={18} rowE={19} />
        <DownloadApp area="B2" colS={2} colE={9} rowS={19} rowE={20} />

        <SectionTitle area="F1" colS={2} colE={9} rowS={20} rowE={21} />
        <AccordionComp area="F2" colS={2} colE={9} rowS={21} rowE={22} />
        <BackTop area="BT" onClick={backTop} />
      </Wrap>
      <Footer />
    </div>
  );
}
