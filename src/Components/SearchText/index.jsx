import { useEffect } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function SearchText({ content, id }) {

  const navigate = useNavigate()

  useEffect(() => {

  }, [])

  function handleDetails() {
    navigate(`/moviepreview/${id}`)
  }

  return (
    <Container>
      <p onClick={handleDetails} >{content}</p>
    </Container>
  )
}