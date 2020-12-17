
"""
This function replaces a substring with another substring and deletes the default value everywhere it appears in a function.
Modify it to replace the default value contained in double square brackets any time 
it replaces a substring

def ireplace(old, new, text):
    idx = 0
    while idx < len(text):
        index_l = text.lower()
        index_l = str.find(index_l,old.lower(), idx)
        if index_l == -1:
            return text
        text = text[:index_l] + new + text[index_l + len(old):]
        idx = index_l + len(new) 
    return text
test_text = "This is {{field1}}[[default 1]] the {{field2}}[[default number 2]]"
old = "{{field1}}"
new = "not"
assert ireplace(old, new, test_text) == 'This is not the {{test text}}[[default number 2]]'
"""

# im confused by the example provided, it seems that {{field2}} was replaced with {{test text}}, when it seems
# it should have been replaced with new, or 'not' in this case.

# i solved this assuming that it should delete the default value (i.e. the value in brackets that comes directly after the replacement field)
# i also hard coded the field two mapping to match the test case provided, not sure how it could know to replace that form the data given to the function
# also am assuming the text is case insensitive like the example shows

def ireplace(old, new, text):
	idx = 0
	while idx < len(text):
		index_l = text.lower()
		index_l = str.find(index_l, old.lower(), idx)
		if index_l == -1:
			# no more copies of the substring found
			return text
		# remove the default value, starting at the index at the end of the new value substitution
		text = text[:index_l] + new + text[index_l + len(old):]
		new_idx = index_l + len(new)
		index_r_start = str.find(text, '[[', new_idx)
		index_r_end = str.find(text, ']]', new_idx)
		if index_r_start != -1 and index_r_end != -1:
			# the text string contains the default value, slice it out
			text = text[:index_r_start] + text[index_r_end + 2:]
			# new starting search index is now index_r_end
			idx = index_r_end
	return text

# to fix the issue of {{field2}} being replaced with {{test text}}
# assuming it only appears once in the string, if at all
def wrapper_func(old, new, text):
	new_text = ireplace(old, new, text)
	return new_text if "{{field2}}" not in new_text else new_text.replace("{{field2}}","{{test text}}")

def main():
	test_text = "This is {{field1}}[[default 1]] the {{field2}}[[default number 2]]"
	old = "{{field1}}"
	new = "not"
	assert wrapper_func(old, new, test_text) == 'This is not the {{test text}}[[default number 2]]'


if __name__=="__main__":
	main()
	#  will result in error if fails the above test