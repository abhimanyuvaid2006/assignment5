# Debugger Steps

## Breakpoint 1 - Before fetching data

This breakpoint stops the code right before it sends a request to the
Winnipeg API.

At this point I can see:
 commonName - the tree name picked from the dropdown
 apiUrl - the URL with the search query
encodedURL - the same URL but safe to use in fetch

When I press Step Over, the fetch runs and response gets a value.
This is what I expected because fetch sends the request and gives back
a response.

## Breakpoint 2 - After getting the data

This breakpoint stops right after fetchTrees finishes and returns the
data.

At this point I can see:
 trees - a list of tree objects with data like name and size

When I press Step Over, the code checks if(trees.length === 0). Since
my list had data, it skips this and goes into the forEach loop. This is
correct because the search returned results.

## Breakpoint 3 - Updating the page

This breakpoint stops inside the forEach loop, on the first tree.

At this point I can see:
 tree - the current tree object
 common_name, species, diameter, neighbourhood - about to be
  filled in

When I press Step Over a few times, a new table row is created and added
to the page. I can see the row appear on the webpage. This is correct,
each tree adds one row.

## Critical State

I picked Breakpoint 2 to look at closer.

This tells me if the API call worked. If trees is empty or undefined,
something went wrong.
In my test, trees had data, so the API call and the URL were correct.
This matters because the next step (the loop that
builds the table)
only works if trees has data. If it didn't, the
try...catch would
catch the error and show a message instead of crashing the page.