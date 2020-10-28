g_AMOUNT = 0

def partition(container, low, high):
    pivot = container[high];
    i = low;

    for j in range(low, high):
        if(container[j] < pivot):
            container[i], container[j] = container[j], container[i]
            i+=1
    container[i], container[high] = container[high], container[i]
    return i;

def quicksort(container, low, high):
    p = 0;
    if(low < high and g_AMOUNT < 1):
        p = partition(container, low, high)
        quicksort(container, low, p-1)
        g_AMOUNT+=1
        quicksort(container, p+1, high)
    return [container, low, high]

string = list("DEADBEEF")
string_sorted = sorted(string)

i = 0
l, h = 0, 0

while(string != string_sorted):
    print("jere")
    c, l, h = quicksort(string, 0, len(string) - 1)
    string = c

print(string)
print(string_sorted)
