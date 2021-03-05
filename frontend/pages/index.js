// The index.js file: basically is everything between your body tags (next does this HTML behind scene)
// edf  snippet that will giv u "export default func"

export default function IndexPage() {
  return (
    <>
      {/* all the child elements will go in as children through props */}
      <p>Helloo!</p>
      <code>var</code>
      <p>I'm a child</p>
    </>
  );
}
