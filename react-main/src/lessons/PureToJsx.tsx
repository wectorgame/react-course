import { Book } from '../problems'

const PureToJsx = () => {
  return (
    <div>
      <h1 id="hello" className="class1">
        Hello WORLD!
      </h1>
      <Book data-id="1" name="Js for beginners" year={2010} price={900}>
        <p>Text here</p>
      </Book>
      <Book name="React" year={2020} price={1900} />
      <Book name="Vue" year={2015} price={1500} />
    </div>
  )
}

export default PureToJsx
