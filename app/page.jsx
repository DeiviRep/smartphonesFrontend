async function fetchSmartphones() {
  const res = await fetch("http://localhost:8000/api/smartphones")
  const data = await res.json()
  return data
}

async function IndexPage() {
  const smartphones = await fetchSmartphones();
  console.log(smartphones)
  return (
    <div>
      <h1>IndexPage</h1>
      <div>
        {JSON.stringify(smartphones)}
      </div>
    </div>
  )
}

export default IndexPage