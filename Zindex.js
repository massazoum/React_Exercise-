// const root = document.getElementById('root');
// const paragraph = document.createElement('p');
// const paragraphContent = document.createTextNode("I'm a paragraph!");
// paragraph.appendChild(paragraphContent);
// root.appendChild(paragraph);

// const update = () => {
//  //   JavaScript
//  const element2 = `
//    <h3>JavaScript:</h3>
//    <form>
//      <input type="text"/>
//    </form>
//    <span>Time: ${new Date().toLocaleTimeString()}</span>
//  `;
//  document.querySelector('#root2').innerHTML = element2;
// };

// setInterval(update, 1000);


const rootElement = document.querySelector('#root1');
const root = ReactDOM.createRoot(rootElement);

const update = () => {
  const element1 = React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      null,
      React.createElement('input', {
        type: 'text',
      })
    ),
    React.createElement(
      'span',
      null,
      'Time: ',
      new Date().toLocaleTimeString()
    )
  );
  root.render(element1);
};

setInterval(update, 1000);
