
const scrollbarProperties = `
::-webkit-scrollbar {
  width: 5px;
  background-color: #E6E6E6;
  }
  
  ::-webkit-scrollbar-thumb {
  background-color: #17C964;
  border: 4px solid transparent;
  border-radius: 8px;
  background-clip: padding-box;  
  }
  
  ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(23, 201, 100, 0.3);
  border-radius: 10px;
  background-color: #E6E6E6;
  }
  
  ::-moz-scrollbar {
  width: 5px;
  background-color: #E6E6E6;
  }
  
  ::-moz-scrollbar-thumb {
  background-color: #17C964;
  border: 4px solid transparent;
  border-radius: 8px;
  background-clip: padding-box;  
  }
  
  ::-moz-scrollbar-track {
  -moz-box-shadow: inset 0 0 6px rgba(23, 201, 100, 0.3);
  border-radius: 10px;
  background-color: #E6E6E6;
  }
`

const Scrollbar = () => <style jsx global>{scrollbarProperties}</style>

export default Scrollbar;