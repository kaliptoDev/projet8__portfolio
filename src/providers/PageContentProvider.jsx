import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const PageContentContext = createContext({
    pageContent: {},
    setPageContent: () => {},
    error: null
})

// PROVIDER = fournisseur du context
const PageContentProvider = ({ children }) => {
    const [pageContent, setPageContent] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/data/pageContent.json')
            .then((response) => response.json())
            .then((data) => setPageContent(data))
            .catch((err) => setError(err))
    }, [])

    // console.log(pageContent)

    return (
        <PageContentContext.Provider value={{ pageContent, setPageContent, error }}>
            {children}
        </PageContentContext.Provider>
    )
}

export default PageContentProvider