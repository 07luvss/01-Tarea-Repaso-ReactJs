export const CommentsCard = () => {

return ( 


    <div className="feature col" key={item.id}>
    <h3 className="fs-2">{item.tittle}</h3>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" className="text-info">
      Call to action
    </a>
  </div>)
};
