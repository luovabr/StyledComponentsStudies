import React from 'react';
import { Button , Container, List } from './styles';


function App() {
  const [comment, setComments] = React.useState();
  const [allComments, setAllComments] = React.useState([]);

  function handleClickButton() {
    const allOldComments = [...allComments, comment]

    setAllComments(allOldComments)
  }

  function handleTextArea(event) {
    setComments(event.target.value)
  }

  return (
    <Container>
      <textarea onChange={handleTextArea}></textarea>
      <Button isOn={comment}  onClick={handleClickButton}>Comentar</Button>

      <List>
        {
          allComments.map((cmt, index) => (
            <li key={index}>{cmt}</li>
          ))
        }
      </List>
    </Container>
  );
}

export default App;