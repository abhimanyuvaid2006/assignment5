

## 1. Can I explain what my code does?

My project is a Tree Explorer for Winnipeg. The user picks a tree name
from a dropdown and clicks Search. My JavaScript then builds a link to the
City of Winnipeg API to get tree data, fetches it, and shows the results
in a table with the tree's name, species, size, and neighbourhood. HTML
gives the page its structure, CSS makes it look nice, and JavaScript
connects them by getting real data and showing it.

## 2. What was my coding process?

I built the HTML first (header, dropdown, button, table). Then I added CSS
to style it. After that I wrote the JavaScript, starting with the function
to fetch data, then the function to get the dropdown value, then the
function to show the results in the table. I tested using console.log to
check the data before showing it on the page. I committed my code often
with small messages.

## 3. What challenges did I have?

The hardest part was getting the API URL right. The $where and $order
parts had to be written in a specific way or I got errors or no results. I
also didn't understand encodeURI at first, but I learned it's needed
because spaces and special characters break the URL. Another problem was
when the search had no results, my table just stayed empty with no
message, so I added a check for that.

## 4. What would I do differently now?

I would add the error and "no results" message earlier instead of at the
end, since it would have saved me time figuring out why my page looked
empty. I would also test the API link in the browser first before writing
any code, so I know the link works. I would also plan my CSS styles before
starting instead of adding them one at a time.