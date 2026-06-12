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

async function displayTrees(){
    const container = document.getElementById("resultsTable");
    const message = document.getElementById("message");
    const commonName = getSelectedTree();

    message.textContent = "";
    container.innerHTML = "";

    try{
        const trees = await fetchTrees(commonName);

        if(trees.length === 0){
            message.textContent = "No trees found. Try a different search.";
            return;
        }

        trees.forEach((tree) => {
            const common_name = tree.common_name;
            const species = tree.species;
            const diameter = tree.diameter_at_breast_height;
            const neighbourhood = tree.neighbourhood_name;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${common_name}</td>
                <td>${species}</td>
                <td>${diameter}</td>
                <td>${neighbourhood}</td>
            `;

            container.appendChild(row);
        });
    }
    catch(error){
        console.error("Failed to display trees:", error.message);
        message.textContent = "Something went wrong. Please try again.";
    }
}