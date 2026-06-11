async function fetchTrees(commonName){
    try{
        const apiUrl = 'https://data.winnipeg.ca/resource/d3jk-hb6j.json?' +
                        `$where=lower(common_name) LIKE lower('%${commonName}%')` +
                        '&$order=diameter_at_breast_height DESC' +
                        '&$limit=100';

        const encodedURL = encodeURI(apiUrl);

        const response = await fetch(encodedURL);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }
    catch(error){
        console.error("Failed to fetch trees:", error.message);
    }
}

function getSelectedTree(){
    const dropdown = document.getElementById("treeSearch");
    return dropdown.value;
}