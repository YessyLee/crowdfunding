import ProjectCard from "../components/ProjectCard/ProjectCard";

const SearchPage = ({ searchResults }) => {

    const results = searchResults.map(project => <Post key={project.id} post={project} />)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <main>{content}</main>
    )
}
export default SearchPage