import Typography from '@material-ui/core/Typography';
import TableChartIcon from '@material-ui/icons/TableChart';

export default function DataIcon () {
    return ( 
        <>
            <Typography component='p' style={{paddingRight: '15px'}}>
                Data
            </Typography>
            <TableChartIcon />
        </>
    )
};