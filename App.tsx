import { useState } from 'react'
import './App.css'


interface Recipe {
  title: string
  ingredients: string
  preparationSteps: string
}

export const App = () => {
  const [input, setInput] = useState("")
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [list, setList] = useState<Recipe[]>([
    {
      title: "3-ingredient mac and cheese",
      ingredients: "Milk, pasta, cheese",
      preparationSteps: 
      "1. In a large pot, bring the milk to a boil 2. Add pasta and stir constantly until pasta is cooked 3. Turn off heat and add cheese, stirring until cheese is melted and pasta is evenly coated"
    },
    {
      title: "3-ingredient cookies and cream ice cream",
      ingredients: "Heavy cream, Condensed milk, Chocolate sandwich cookies",
      preparationSteps: "1. Separate cookies and and cream filling into two separate bowls 2. Pour cookies into bag and smash until crumbled 3. Combine crumbs and condensed milk, mix together, and set aside. 4. Whip heavy cream with hand mixer until stiff peaks form 5. Fold cookie mix into whipped cream and transfer to baking dish before topping with more cookie crumbs and cream 6. Freeze for 4 hours"
    }
  ]);

  const changeRecipe = (e) => {
    setInput(e.target.value)
  }

  const changeRecipe1 = (e) => {
    setInput1(e.target.value)
  }

  const changeRecipe2 = (e) => {
    setInput2(e.target.value)
  }

  const addRecipe = () => {
    if (input  == "") return
    if (input1  == "") return
    if (input2  == "") return
    const copy = [...list]
    copy.push({
      title: input,
      ingredients: input1,
      preparationSteps: input2
    })
    setList(copy)
    setInput("")
    setInput1("")
    setInput2("")
  }

  const deleteRecipe = (index: number) => {
    const copy = [...list]
    copy.splice(index, 1)
    setList(copy)
  }
  
  return (
    <div>
      <div>
        <h2 className="header">This is a place where you can apply to submit your recipe. There are already some examples, but give me yours.</h2>
        <p>(P.S. Your recipe will only show with the title and ingredients.)</p>
        {list.map((value, index) => {
          return(
            <div>
              {value.title} (Ingredients: {value.ingredients})
              <button className="delete" onClick={() => deleteRecipe(index)}>Delete</button>
            </div>
          )
        })}
      </div>
      <h3>Type in your recipe to get started</h3>
      <div className="container">
      <div>
        <br></br>
        Title: <input className="inputs" type="text" value={input} onChange={changeRecipe}></input> 
        <br></br>
        Ingredients: <input className="inputs" type="text" value={input1} onChange={changeRecipe1}></input> 
        <br></br>
        Preparation Steps: <input className="inputs" type="text" value={input2} onChange={changeRecipe2}></input> 
      </div>
      <button className="add" onClick={addRecipe}>Add</button>
      </div>
    </div>
  )

}
