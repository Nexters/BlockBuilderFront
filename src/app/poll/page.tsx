import Container from './components/Container';
import Tabs from './components/Tabs';
import Poll from './components/Poll';

export default function PollPage() {
  return (
    <Container>
      <h1 className="text-title-1-semibold text-gray-800">투표하고 블록체인에 저장해볼까요?</h1>
      <p className="mt-[0.8rem] text-body-2-regular text-gray-700">
        투표를 하면 블록체인에 저장된 컨트렉트를 확인할 수 있어요.
      </p>
      <Tabs>
        <Poll />
      </Tabs>
    </Container>
  );
}
