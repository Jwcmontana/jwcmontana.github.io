//Defines The Size Of The Array To Search
#define WORLDSIZEX 12
#define WORLDSIZEY 12

class AStarNode
{

public:
	//Holds a pointer to the parent state
	AStarNode *parent;
	//Holds pointers to the surrounding nodes
	//in a list
	AStarNode *next;
	AStarNode *prev;
	//Holds the array index row
	int row;
	//Holds the array index column
	int column;
	//These are the values that
	//AStar uses to choose a best child
	int f;
	int g;
	int h;
	//Default Constructor
	AStarNode()
	{
		prev = NULL;
		next = NULL;
		parent = NULL;
		f = 0;
		g = 0;
		h = 0;
		row = 0;
		column = 0;
	}
	//Init all AStar related data
	AStarNode(int r, int c, int ff, int gg, int hh, AStarNode *p)
	{
		row = r;
		column = c;
		f = ff;
		g = gg;
		h = hh;
		prev = NULL;
		next = NULL;
		parent = p;
	
	}
	//Init all List related data
	AStarNode(AStarNode *p, AStarNode *n)
	{
		parent = NULL;
		next = n;
		prev = p;
		f = 0;
		g = 0;
		h = 0;
		row = 0;
		column = 0;
	}

	//------------Getters And Setters------------//
	AStarNode* getNext(void)
	{
		return next;
	}
	AStarNode* getPrev(void)
	{
			return prev;
	}
	void setNext(AStarNode *n)
	{
		next = n;
	}
	void setPrev(AStarNode *p)
	{
		prev = p;
	}
	void setG(int gg)
	{
		g = gg;
	}
	void setH(int hh)
	{
		h = hh;
	}	
	void setF(int ff)
	{
		f = ff;
	}
	void setF(void)
	{
		f = g + h;
	}
	//-----------------------------------------//
};
//This Is Simply A Linked List 
//With A Few Basic Operations
class list
{

public:
	//The dummy head of the list
	AStarNode *head;
	//The dummy tail of the list
	AStarNode *tail;
	
	//Make a New List
	list(void)
	{
		//Make a head
		head = new AStarNode();
		//Make a tail
		tail = new AStarNode();
		
		//Set the head and tail links

		head->setPrev(NULL);
		head->setNext(tail);
		tail->setPrev(head);
		tail->setNext(NULL);
	}
	//insert a node at the back of the list
	void insert(AStarNode *n)
	{
		AStarNode *temp;
		n->setNext(tail);
		n->setPrev(tail->getPrev());
		temp = tail->getPrev();
		temp->setNext(n);
		tail->setPrev(n);
	}
	//remove a given node
	void remove(AStarNode *n)
	{
		if(!isEmpty())
		{
			AStarNode *temp;
			temp = n->getPrev();
			temp->setNext(n->getNext());
			temp = n->getNext();
			temp->setPrev(n->getPrev());

		}
	}
	//check if the list is empty
	bool isEmpty(void)
	{
		if(head->getNext() == tail)
			return true;
		else
			return false;
		
	}
	//This Function Finds any nodes in 
	//this list that have the same
	//row and column values and a lower
	//f value than the node that was passed in
	bool findDups(AStarNode *n)
	{
			
			AStarNode *temp = head->getNext();
			while(temp != tail )
			{
				
     				if(n->row == temp->row)
					{
						if(n->column == temp->column)
						{
							if(n->f >= temp->f)
							{
								return true;
							}
						}
					}
				temp = temp->getNext();
			}
		return false;
	}
	//This function finds the node with the 
	//lowest f in this list
	AStarNode* findLowestF(void)
	{
		AStarNode *temp = head->getNext();
		AStarNode *returnNode = NULL;
		int min = 10000;
		while(temp != tail)
		{
			if(temp->f < min)
			{
				min = temp->f;
				returnNode = temp;
			}
			temp = temp->getNext();
		}
		return returnNode;
	}
	//Prints the path from last child
	//to first parent
	void toString()
	{
		AStarNode *temp = tail->getPrev();
		while(temp != NULL)
		{
			std::cout << temp->row << " " << temp->column << "\n";
			temp = temp->parent;
		}
	}

};


//This function finds where
//the ending node is in the array
//and returns a node with the starting
//array index in it
AStarNode* findEnd(void)
{
	AStarNode *returnNode;
	for(int i = 0; i < WORLDSIZEX; i++)
	{
		for(int j = 0; j < WORLDSIZEY; j++)
		{
			if(mapData[i][j] == 4)
			{
				returnNode = new AStarNode(i,j,0,0,0,NULL);
				return returnNode;
			}

		}
	}
	
}
//Same as above but finds the start state
AStarNode* findStart(void)
{
	AStarNode *returnNode;
	for(int i = 0; i < WORLDSIZEX; i++)
	{
		for(int j = 0; j < WORLDSIZEY; j++)
		{
			if(mapData[i][j] == 3)
			{
				returnNode = new AStarNode(i,j,0,0,0,NULL);
				return returnNode;
			}

		}
	}
	
}
//This function calculates the H value
//for a given node
int calcH(AStarNode *end, AStarNode *currentNode)
{
	//This will hold the h vaule to return
	int h = 0;
	//How many horizontal moves are from the 
	//currentNode to the end node
	int horDif = end->column - currentNode->column;
	//How many vertical moves will it take to get to 
	//the end node from the currentNode
	int vertDif = end->row - currentNode->row;
	
	//Make Sure the values are absloute values
	
	if(horDif < 0)
		horDif = -horDif;

	if(vertDif < 0)
		vertDif = -vertDif;

	//Add the vertical and horizontal moves cost 
	//to find the distance from the current node to the end
	h = vertDif + horDif;
	
	//if this node is a "wall"
	if(mapData[currentNode->row][currentNode->column] == 2)
	{
		//set the h really high so we won't go to 
		//this node
		h= 1000;
	}
		//return the h value
		return h; 
}
list AStar(void)
{
	//This is the Open list
	list open = list();
	//This is the Closed List
	list closed = list();
	//This is a temporary pointer
	//to the node we are currently expanding
	AStarNode *current;
	//store a starting node
	AStarNode *start = findStart(); 
	//and store an ending node
	AStarNode *end = findEnd();
	//These are the pointers to the children node
	AStarNode *children[4];
	

	//insert the start onto the open list
	open.insert(start);
	

	while(!open.isEmpty())
	{		
	//Find the best node that we haven't yet expanded
	current = open.findLowestF();
	//Take the best node off the open list 
	open.remove(current);

		// -----------Generate The Children-----------//
		//The next 4 if else statments generate the four
		//possible states that can arise from any state. 
		//It then check to make sure we don't go out
		//of the array bounds and creates the child node
		//I will comment the first one and the next 3 
		//should be self explanition
		
		//If making the move would not put us
		//out of the array bounds
		if(current->row + 1 < WORLDSIZEX)
		{
			//set the first child to a new node 
			children[0] = new AStarNode(current->row+1,
										current->column,
										0,
										current->g + 1,
										0,
										current);
		}
		//if we would go out of bounds
		else
		{
			children[0] = NULL;
		}
		
		if(current->row - 1 >= 0)
		{
			children[1] = new AStarNode(current->row-1,
										current->column,
										0,
										current->g + 1,
										0,
										current);


		}

		else
		{
			children[1] = NULL;
		}
		
		if(current->column + 1 < WORLDSIZEY)
		{
			children[2] = new AStarNode(current->row,
										current->column + 1,
										0,
										current->g + 1,
										0,
										current);

		}
		else
		{
			children[2] = NULL;
		}
		if(current->column  - 1 > 0)
		{
			children[3] = new AStarNode(current->row,
										current->column - 1,
										0,
										current->g + 1,
										0,
										current);


		}
		else
		{
			children[3] = NULL;
		}
		
		
		for(int i = 0; i < 4; i++)
		{
			
			//Make sure there is a child to 
			//process
			if(children[i] != NULL)
			{
				//calculate the h for this child
				children[i]->setH(calcH(end,children[i]));
				//then set the f
				children[i]->setF();
				
				//see if this is the goal node
				if(children[i]->row == end->row)
				{
					if(children[i]->column == end->column)
					{
						//put it on the closed list 
						closed.insert(children[i]);
						//end the algorithm
						return closed;
					}
				}
				//make sure there are no duplicates
				if(!open.findDups(children[i]))
				{
					
					if(!closed.findDups(children[i]))
					{
						//if there are not put it on
						//the open list to be checked
						open.insert(children[i]);
					}
				}
			}
		
		}
		//put the just expaned node on the closed list
		closed.insert(current);

	 }
	return closed;
}
