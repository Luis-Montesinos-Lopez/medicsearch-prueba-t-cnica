import { useState } from "react";
import HomeView from "./HomeView";

export default function Home() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handlechange(e) {
    setSearch(e.target.value);
  }

  async function handleSearch() {
    setError("");
    setLoading(true);
    try {
      if(search===""){
        setError("Ingresa un medicamento");
        setLoading(false);
        setList([]);
        return
      }
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=${search}`
      );
      if(response.ok){
        const data = await response.json();
      setList(data.results);
      }else{
        setError("Error al encontrar el medicamento");
        setList([]);
      }
    } catch (err) {
      setError("Error fetching data");
    }
    setLoading(false);
  }
  return (
    <HomeView
      handleChange={handlechange}
      handleSearch={handleSearch}
      search={search}
      list={list}
      loading={loading}
      error={error}
    />
  );
}
