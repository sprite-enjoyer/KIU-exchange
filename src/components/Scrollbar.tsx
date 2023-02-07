
const scrollbarProperties = `
::-webkit-scrollbar {
  display: none;
}
`

const Scrollbar = () => <style jsx global>{scrollbarProperties}</style>

export default Scrollbar;