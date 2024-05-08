@extends('admin.base')

@section('section_title')
<strong>{{ __('Send Mail List') }}</strong>

<br />
<a href="{{route('admin.send-mail.create')}}" class="text-indigo-700 font-semibold hover:underline">
    {{ __('+Send Mail') }}
</a>

@endsection

@section('section_body')


@if (count($mailData))
<table class="table border-collapse w-full bg-white text-stone-600 dataTable">
    <thead>
        <tr>
            <x-th>{{ __('ID') }}</x-th>
            <x-th>{{ __('Sender email ') }}</x-th>
            <x-th>{{ __('Recever email') }}</x-th>
            <x-th>{{ __('Message') }}</x-th>
            <x-th>{{ __('Actions') }}</x-th>
        </tr>
    </thead>
    <tbody>
        @foreach ($mailData as $s)
        <tr>
            <x-td>
                <x-slot name="field">{{ __('ID') }}</x-slot>
                {{ $s->id }}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Sender email') }}</x-slot>
                {{ $s->send_email ?? '' }}
            </x-td>
            <x-td>
                <x-slot name="field" >{{ __('Recever email') }}</x-slot>
                {{ implode(', ', json_decode($s->receiver_email, true)) }}
            </x-td>
            <x-td>
                <x-slot name="field" >{{ __('Message') }}</x-slot>
                {{ $s->message ?? '' }}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Actions') }}</x-slot>
                {{-- <a href="{{route('admin.tag-pixels.edit',$s->id)  }}"><i class="fa-solid fa-pencil mr-2 text-teal-600"></i></a> --}}
                <a href="{{route('admin.send-mail.delete',$s->id)  }}"
                    onclick="return confirm('{{ __('Are you sure you want to remove this pack?')  }}')"><i
                        class="fa-solid fa-trash text-red-400"></i></a>
            </x-td>
        </tr>
        @endforeach
    </tbody>
</table>
@else
<div class="bg-white p-3 rounded">{{ __('No token packs created.') }}</div>
@endif
@endsection

@section('extra_bottom')
@if (count($errors) > 0)
<div class="alert alert-danger">
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
@endsection


{{-- attention, dynamic because only needed on this page to save resources --}}
@push('adminExtraJS')
<script src="{{ asset('js/jquery.min.js') }}"></script>
<script src="{{ asset('js/datatables/datatables.min.js') }}"></script>
<script>
    $('.dataTable').dataTable({ordering:false});
</script>
@endpush