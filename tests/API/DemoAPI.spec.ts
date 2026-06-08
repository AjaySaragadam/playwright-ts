import { test} from "@playwright/test";



test('GET API Demo Testing', {tag: '@api'}, async({request}) =>
{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.body().toString());
});