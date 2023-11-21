// app/posts/page.js
'use client';
import { useSearchParams } from 'next/navigation';
function Posts() {
    const searchParams = useSearchParams();
	const sort = searchParams.get('sort')
	const query = searchParams.get('q')

    // Fetching data based on sort
    useEffect(() => {
        fetch(`/api/posts?sort=${sort}`)
            .then(response => response.json())
            .then(data => );
    }, [sort]);

    
}

export default Posts;