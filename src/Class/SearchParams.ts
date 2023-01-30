import type { Page } from "@sveltejs/kit";

class SearchParams {

    static get(page: Page, key: string): (string | null) {
        let getParams = new URLSearchParams(page.url.searchParams.toString());
        
        return getParams.get(key);
    }
    
}

export default SearchParams;