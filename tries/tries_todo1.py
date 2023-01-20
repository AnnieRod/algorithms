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