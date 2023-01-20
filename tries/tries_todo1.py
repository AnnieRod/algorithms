## build a trie and add string to the set

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class TrieSet:
    def __init__(self):
        self.root = TrieNode()

    def add(self, word):
        word = word.lower() ## put it in lower case
        current_node = self.root
        for letter in word:
            if letter not in current_node.children: ##check if the letter is in
                current_node.children[letter] = TrieNode()
            current_node = current_node.children[letter]
        if current_node.is_word: ## check if the whole word is it
            return False
        else:
            current_node.is_word = True
            return True
    
    ## search if a string is present in the set
    def search(self, word):
        word = word.lower()
        current_node = self.root
        for letter in word:
            if letter not in current_node.children:
                return False
            current_node = current_node.children[letter]
        return current_node.is_word
    
    ## return the first alphabetically value of the set
    def first(self):
        def dfs(node, letters):
            if node.is_word:
                return letters
            return min([dfs(child_node, letters+letter) for letter,child_node in node.children.items()])
        return dfs(self.root, "")
    
    ## return the last one now
    def last(self):
        def dfs(node, letters):
            if node.is_word:
                return letters
            return max([dfs(child_node, letters+letter) for letter,child_node in node.children.items()])
        return dfs(self.root, "")

trie_set = TrieSet() ##i created a set
print(trie_set.add("bonjour")) # should return True
print(trie_set.add("world")) # should return True
print(trie_set.add("bonjour")) # should return False

current_node = trie_set.root
for letter in "bonjour":
    current_node = current_node.children[letter]
print(current_node.is_word) # should be True

current_node = trie_set.root
for letter in "world":
    current_node = current_node.children[letter]
print(current_node.is_word) # should be True

current_node = trie_set.root
for letter in "bonjo":
    current_node = current_node.children[letter]
print(current_node.is_word) # should be False

print(trie_set.search("hello")) # should return True
print(trie_set.search("world")) # should return True
print(trie_set.search("hell")) # should return False

print(trie_set.first()) 
print(trie_set.last())