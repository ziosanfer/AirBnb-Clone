export const fetchTrees = data => (
    $.ajax({
        method: 'GET',
        url: 'api/trees',
        data
    })
);

export const fetchTree = id => (
    $.ajax({
        method: 'GET',
        url: `api/trees/${id}`
    })
);

export const createTree = tree => (
    $.ajax({
        method: 'POST',
        url: 'api/tree',
        data: { tree }
    })
);