for(i=1;i<=8;i++)
{
    if (i%2!=1)
    {
    for(j=0;j<4;j++)
    {
        process.stdout.write(" #");
    }
    console.log();
    }
    else
    {
        for(j=0;j<4;j++)
    {
        process.stdout.write("# ");
    }
    console.log();
    }

}