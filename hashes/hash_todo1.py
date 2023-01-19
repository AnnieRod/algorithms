##create an add method on HashMap to add a new key and value to the map

class HashMap:
    def __init__(self, size):
        self.size = size
        self.map = [None] * self.size
        
    def _get_hash(self, key):
        hash = 0
        for char in key:
            hash += ord(char)
        return hash % self.size
    
    def add(self, key, val):
        key_hash = self._get_hash(key)
        key_value = [key, val]
        
        if self.map[key_hash] is None:
            self.map[key_hash] = list([key_value])
            return True
        else:
            for pair in self.map[key_hash]:
                if pair[0] == key:
                    pair[1] = val
                    return True
            self.map[key_hash].append(key_value)
            return True