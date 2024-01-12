//our-domain.com/news..
import { Fragment } from "react";
import Link from 'next/link'

//Fragment is used for list of items. 
//Link is used insted of </a> for single page application
function NewsPage() {
    return(
      <Fragment>
        <h1>The News Page</h1>
        <ul>
          <li>
            <Link href='/news/item1'>item1</Link>
            </li>
          <li>item2</li>
        </ul>
      </Fragment>
    )
  }
  
  export default NewsPage;