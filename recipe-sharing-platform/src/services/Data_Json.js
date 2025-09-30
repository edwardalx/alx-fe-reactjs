import configData from "../data.json";
function fetchJsonData() {
    try {
        if (configData == []||configData == null){
            console.error("No date in the data.json file")
        }
        return configData
    } catch (error) {
        console.error(error)
    }
   
    
}
export default fetchJsonData