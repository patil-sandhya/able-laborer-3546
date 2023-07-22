import { Button,Center, HStack } from "@chakra-ui/react";

function Pagination({totalPage, handlePage}) {
  // import the chakra UI components from the chakra UI library , and remove the following.
  // const Button = ()=><div></div>;
  // const Center = ()=><div></div>;
  // const HStack = ()=><div></div>;
  const sendBtn = ()=>{
    
    let btns = []
    for(let i=1; i<=totalPage; i++){
      btns.push(<Button key={i} size='lg' onClick={()=> handlePage(i)}>{i}</Button>)
    }
    return btns
  }
  
  
  return (
    <Center data-testid="pagination-component">
      <HStack>{/* render all the Buttons here */}
    {sendBtn()}
      </HStack>
    </Center>
  );
}

export default Pagination;
