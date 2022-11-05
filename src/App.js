import Colorcard from './component/Colorcard';

function App() {

  const main_styling = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0.1rem",
  };

  return (
    <>
      <div style={main_styling}>
        <Colorcard title="#FF6663" color="PINK" code="#FF6663" />
        <Colorcard title="#333333" color="GRAY" code="#333333" />
        <Colorcard title="#000000" color="BLACK" code="#000000" />
        <Colorcard title="#38BB14" color="GREEN" code="#38BB14" />
        <Colorcard title="#C90B0B" color="RED" code="#C90B0B" />
      </div>

      <div style={main_styling}>
        <Colorcard title="#FF8000" color="ORANGE" code="#FF8000" />
        <Colorcard title="#FFf500" color="YELLOW" code="#FFf500" />
        <Colorcard title="#CCCCCC" color="LIGHT-GRAY" code="#CCCCCC" />
        <Colorcard title="#7E41A2" color="PURPLE" code="#7E41A2" />
        <Colorcard title="#C14911" color="BROWN" code="#C14911" />
      </div>
    </>
  );
}

export default App;