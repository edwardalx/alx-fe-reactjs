export default function EditRecipeForm(){
    const  handleEdit = ()=> {
        console.log("Edit logic here")
    }
    return(
        <>
        <p onClick={handleEdit}>I will start editing</p>
        </>
    )
}