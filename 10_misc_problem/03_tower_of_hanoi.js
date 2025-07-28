const towerOfHanoi = (n, frontRod, toRod, usingRod) => {
    if (n === 1) {
        console.log(`Move Disk 1 from ${frontRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, frontRod, usingRod, toRod);
    console.log(`Move Disk ${n} from ${frontRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod,toRod,frontRod)
};

towerOfHanoi(3,"A","C","B")

// Big-O = O(2^n)