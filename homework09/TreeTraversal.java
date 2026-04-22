
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

public class TreeTraversal {
    public List<String> traverse(String root, Map<String,List<String>> tree){
        // Final output (nodes in traversed order)
        List<String> visited = new Stack<>();
        // Layer of nodes to be processed next
        ArrayDeque<String> childLayer = new ArrayDeque<>();
        ArrayDeque<String> currentLayer = new ArrayDeque<>();
        childLayer.add(root);

        // 0 is left to right, 1 is right to left
        int direction = 1;
        while (!childLayer.isEmpty()) {
            // Make currentLayer = (former) childLayer in reverse order
            currentLayer.clear();
            for (String node : childLayer) {
                currentLayer.addFirst(node);
            }
            
            // reset child layer
            childLayer.clear();

            for (String node: currentLayer) {
                visited.add(node);
                // Process right child then left child
                if (direction == 1) {
                    for (String child : tree.get(node)) {
                        childLayer.addFirst(child);
                    }
                }
                // Process left child then right child
                else {
                    for (String child : tree.get(node)) {
                        childLayer.addLast(child);
                    }
                }
            }

            // Switch traversal direction after process each layer
            if (direction == 1) {
                direction = 0;
            }
            else {
                direction = 1;
            }
        }
        return visited;
    }

    // For testing purposes
    public static void main(String[] args) {
        TreeTraversal traversal = new TreeTraversal();
        Map<String, List<String>> tree = new HashMap<>();

        // Test 1: 
        // String root = "a";
        // tree.put("a", Arrays.asList("b", "c"));
        // tree.put("b", Arrays.asList());
        // tree.put("c", Arrays.asList("d", "e"));
        // tree.put("d", Arrays.asList());
        // tree.put("e", Arrays.asList());

        // Test 2: 
        String root = "A";
        tree.put("A", Arrays.asList("B", "C"));
        tree.put("B", Arrays.asList("D", "E"));
        tree.put("C", Arrays.asList("F", "G"));
        tree.put("D", Arrays.asList());
        tree.put("E", Arrays.asList());
        tree.put("F", Arrays.asList());
        tree.put("G", Arrays.asList());
        
        for (String n : traversal.traverse(root, tree)) {
            System.out.println(n);
        }
    }
}
