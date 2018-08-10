/**
* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
* Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the 
* previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number 
* of additional statues needed.
*/

function makeArrayConsecutive2(statues) {
    var min =  Math.min.apply(null, statues);
    var max =  Math.max.apply(null, statues);
    var numStats = statues.length;
    var range = max - min;
    return range - (numStats - 1);
}